import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = function (SimpleComponent) {
    return function (props) {
        const isAuth = localStorage.getItem("auth");
        const onLogin = () => {
            localStorage.setItem("auth", "token");
        };
        const onLogOut = () => {
            localStorage.removeItem("auth");
        };

        return (
            <>
                <CardWrapper>
                    <SimpleComponent
                        {...props}
                        onLogin={onLogin}
                        onLogOut={onLogOut}
                        isAuth={isAuth}
                    />
                </CardWrapper>
            </>
        );
    };
};

export default withFunctions;
