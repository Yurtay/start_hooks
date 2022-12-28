import React from "react";
import Subtitle from "../../common/typografy/subtitle";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <Subtitle>
                {isAuth ? (
                    <button className="btn btn-secondary" onClick={onLogOut}>
                        Выйти из системы
                    </button>
                ) : (
                    <button className="btn btn-secondary" onClick={onLogin}>
                        Войти
                    </button>
                )}
            </Subtitle>
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
