import React, { useRef } from 'react';

const ParentComponent = () => {
    const otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    return (
        <View>
            <OTPTextInput ref={e => (otpInput = e)} >
            <Button title="clear" onClick={clearText}>
        </View> ̰
    );
}
