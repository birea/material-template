import React from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = () => {
    const [user, setUser] = React.useState({
        name: "",
        number: "",
        cvc: "",
        expiry: "",
        focus: ""
    });

    const handleInput = e => {
        let { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleInputFocus = e => {
        setUser({
            ...user,
            focus: e.target.name
        });
    };
    console.log(typeof user.name);
    const submitForm = () => { };
    return (
        <div>
            <h3 className="text-xl my-4 text-center">Supported Cards</h3>
            <div className="mb-16">
                <form
                    onSubmit={submitForm}
                    className="bg-white mt-32 shadwon-lg  p-8 rounded "
                >
                    <div className="-mt-32 flex justify-center">
                        <Card
                            cvc={user.cvc}
                            expiry={user.expiry}
                            focused={user.focus}
                            name={user.name}
                            number={user.number}
                        />
                    </div>

                    <div className="card-input pt-16 my-4 mx-auto">
                        <label htmlFor="cardNumber" className="block text-sm">
                            {" "}
                            Card Number
                        </label>
                        <input
                            type="number"
                            name="number"
                            onChange={handleInput}
                            onFocus={handleInputFocus}
                            pattern="[\d| ]{16,22}"
                            required
                            className="py-2 px-2 border-2 outline-none cn-input"
                        />
                        <p>
                            {user.number.length > 16 ? (
                                <span className="text-red-700">
                                    card number exeeds required value{" "}
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                    <div className="card-input ">
                        <label htmlFor="cardHolder" className="block text-sm">
                            {" "}
                            Card Holder
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleInput}
                            onFocus={handleInputFocus}
                            className="py-2 px-2 border-2 outline-none cn-input"
                        />
                    </div>
                    <div className="mt-6 d3">
                        <span>
                            <label className="block">Expiry Date</label>
                            <input
                                type="number"
                                name="expiry"
                                placeholder="MM/YY"
                                onChange={handleInput}
                                onFocus={handleInputFocus}
                                className="py-2 px-2 border-2 outline-none cn-input"
                            />
                        </span>
                        <span className="cv2  ">
                            <label htmlFor="card-number" className="block text-sm">
                                {" "}
                                CCV2
                            </label>
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="cvc"
                                onFocus={handleInputFocus}
                                onChange={handleInput}
                                className=" border-2 px-2 outline-none ccv2"
                            />
                        </span>
                    </div>
                    <div className=" ">
                        <input
                            type="submit"
                            value="Submit"
                            className="btn py-2 bg-blue-700 shadow-lg text-lg font-bold text-white"
                        />
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap mb-16">
                <Card
                    name="John Smith"
                    number="5555 4444 3333 1111"
                    expiry="10/20"
                    cvc="737"
                />
                <Card
                    name="John Smith"
                    number="4111 1111 1111 1111"
                    expiry="10/20"
                    cvc="737"
                />
                <Card
                    name="John Smith"
                    number="3700 0000 0000 002"
                    expiry="10/20"
                    cvc="737"
                />
                <Card
                    name="John Smith"
                    number="3600 666633 3344"
                    expiry="10/20"
                    cvc="737"
                />
                <Card
                    name="John Smith"
                    number="6011 6011 6011 6611"
                    expiry="10/20"
                    cvc="737"
                />

                <Card
                    name="John Smith"
                    number="5066 9911 1111 1118"
                    expiry="10/20"
                    cvc="737"
                />

                <Card
                    name="John Smith"
                    number="6250 9460 0000 0016"
                    expiry="10/20"
                    cvc="737"
                />

                <Card
                    name="John Smith"
                    number="6062 8288 8866 6688"
                    expiry="10/20"
                    cvc="737"
                />
            </div>
            <div className="flex flex-wrap">
                <Card
                    name="John Smith"
                    number="**** **** **** 7048"
                    expiry="10/20"
                    cvc="737"
                    preview={true}
                    issuer="visa"
                />

                <Card
                    name="John Smith"
                    number="**** **** **** 1111"
                    expiry="10/20"
                    cvc="737"
                    preview={true}
                    issuer="mastercard"
                />

                <Card
                    name="p ter"
                    number="**** **** **** 2222"
                    expiry="10/20"
                    cvc="737"
                    preview={true}
                    issuer="JCB"
                />
                <Card
                    name="p ter"
                    number="**** **** **** 2222"
                    expiry="10/20"
                    cvc="737"
                    preview={true}
                    issuer="amex"
                />
                <Card
                    name="p ter"
                    number="**** **** **** 2222"
                    expiry="10/20"
                    cvc="737"
                    preview={true}
                    issuer="dinersclub"
                />
                <Card
                    name="p ter"
                    number="**** **** **** 2222"
                    expiry="10/20"
                    cvc="737"
                    preview={true}
                    issuer="hipercard"
                />
            </div>
        </div>
    );
}

export default CreditCard