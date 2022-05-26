import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const MembersForm = ({ members, setHomeState }) => {

    const [memberData, setValueByEvent, resetform] = useForm({ firstName: "", lastName: "", address: "", ssn: "" });
    const { firstName, lastName, address, ssn } = memberData;
    const [errors, setErrors] = useState({ firstName: false, lastName: false, address: false, ssn: false });
    const [submitActive, setSubmitActive] = useState(false);
    const validateForm = () => {
        let isMemberRepeated = (members.filter(member => member.ssn == ssn).length > 0);
        setSubmitActive(true);
        setErrors(() => ({ firstName: false, lastName: false, address: false, ssn: false }))
        if (firstName.length < 2) setErrors((prevState) => ({ ...prevState, firstName: true }))
        if (lastName.length < 2) setErrors((prevState) => ({ ...prevState, lastName: true }))
        if (address.length < 2) setErrors((prevState) => ({ ...prevState, address: true }))
        if (ssn.length < 10) setErrors((prevState) => ({ ...prevState, ssn: true }))
        if (isMemberRepeated) setErrors((prevState) => ({ ...prevState, ssn: true }))
        if (isMemberRepeated || firstName.length < 1 || lastName.length < 1 || address.length < 1) {
            setSubmitActive(false);
            return false;
        }
        return true;
    }
    const onChangeHandler = (event) => {
        validateForm();
        setValueByEvent(event)
    };
    const submitHandler = () => {
        if (!validateForm()) return;
        setHomeState((prevState) => ({ ...prevState, members: [...prevState.members, { firstName: firstName.trim(), lastName: lastName.trim(), address: address.trim(), ssn }] }));
    }
    const resetHandler = () => {
        resetform();
    }

    return <div className="h-full ">
        <h1 className="text-2xl font-bold">Add a new member</h1>
        <div className=" my-16 ">
            <input onChange={onChangeHandler}
                value={firstName}
                name="firstName"
                className="block border px-4 py-2 w-full" type="text" placeholder="First Name"
            />
            {errors.firstName ? <label htmlFor="ssn" className="lowercase text-rose-700">*Wrong first Name</label> : null}
        </div>
        <div className=" my-16 ">
            <input onChange={onChangeHandler}
                value={lastName}
                name="lastName"
                className="block border px-4 py-2 w-full" type="text" placeholder="Last Name"
            />
            {errors.lastName ? <label htmlFor="ssn" className="lowercase text-rose-700">*Wrong last name</label> : null}
        </div>
        <div className=" my-16 ">
            <input onChange={onChangeHandler}
                value={address}
                name="address"
                className="block border px-4 py-2 w-full" type="text" placeholder="Address"
            />
            {errors.address ? <label htmlFor="ssn" className="lowercase text-rose-700">*Wrong address</label> : null}
        </div>
        <div className=" my-16 ">
            <input onChange={onChangeHandler}
                value={ssn}
                name="ssn"
                className="block border px-4 py-2 w-full" type="text" placeholder="SSN"
            />
            {errors.ssn ? <label htmlFor="ssn" className="lowercase text-rose-700">*SSN missing or duplicated, register a new member</label> : null}
        </div>
        <div className="flex justify-around gap-4">
            <button onClick={resetHandler}
                className="transition ease-in-out uppercase px-4 py-2 text-white  bg-rose-400 hover:bg-rose-500 border-0">
                Reset
            </button>
            <button onClick={submitHandler}
                disabled={!submitActive}
                className="transition ease-in-out uppercase px-4 py-2 text-white  border-0 bg-green-400 hover:bg-green-500 disabled:opacity-20 disabled:bg-slate-600">
                Send
            </button>
        </div>
    </div>
}

export default MembersForm 