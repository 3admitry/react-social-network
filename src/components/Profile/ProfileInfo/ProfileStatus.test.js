import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status", () => {
    test("Status from props should be in state", () => {
        const component = create(<ProfileStatus status='TEST STATUS' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("TEST STATUS");
    });
    test("After creation 'span' should be displayed", async () => {
        const component = create(<ProfileStatus status='TEST STATUS' />);
        const instance = component.root;
        const span = await instance.findByType("span");
        expect(span).not.toBeNull()
    });
    test("After creation 'input' shouldn't be displayed", async () => {
        const component = create(<ProfileStatus status='TEST STATUS' />);
        const instance = component.root;
        expect( ()=>{
            // eslint-disable-next-line testing-library/await-async-query
            const input = instance.findByType("input");
        }).toThrow('')
    });
    test("After click input should be displayed instead of span", async () => {
        const component = create(<ProfileStatus status='TEST STATUS' />);
        const instance = component.root;
        const span = await instance.findByType("span");
        span.props.onClick()
        const input = await instance.findByType("input");
        expect(input.props.value).toBe('TEST STATUS')
    });
    test("Callback should be called", async () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='TEST STATUS' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});