// Codding a test HOC
import React, {useState} from 'react';

/*
Ошибочный пример при попытке создания ХОКа
useState падает в использовании синтаксиса возврата колбека в стрелочной функции
Необходимо использывать Function Declaration в возврате стрелочной функции, тогда будет все Ок
см. пример на стр. 31
*/

/*export const HocAccordion = (WrappedComponent) => {
    return (props) => {
        let [collapsed, setCollapsed] = useState(true)
        const collapsedHandler = () => {
            setCollapsed(!collapsed);
        }
        return (
            <>
                <button onClick={collapsedHandler}>{collapsed ? 'HIDE' : 'SHOW'}</button>
                {collapsed &&
                    <div>
                        <WrappedComponent {...props} />
                    </div>
                }
            </>
        );
    }
};*/

export const HocAccordion = (WrappedComponent) =>
    function Comp(props){
        let [collapsed, setCollapsed] = useState(true)
        const collapsedHandler = () => {
            setCollapsed(!collapsed);
        }
        return (
            <>
                <button onClick={collapsedHandler}>{collapsed ? 'HIDE' : 'SHOW'}</button>
                {collapsed &&
                    <div>
                        <WrappedComponent {...props} />
                    </div>
                }
            </>
        );
    };