import React, { useEffect, useState } from "react"
import { Header } from "../components/shared/header"
import { Footer } from "../components/shared/footer"
import { MembersForm } from "../components/members/membersForm"
import { MembersTable } from "../components/members/membersTable"
import { getMembers } from "../helpers/members"

const Home = () => {
    const [homeState, setHomeState] = useState(() => ({ members: [] }));
    const { members } = homeState;
    const MINUTE_MS = 1000 * 60 * 10;
    useEffect(() => {
        getMembers().then((data) => {
            setHomeState((prevState) => ({ ...prevState, members: [...data] }));
        })
        const interval = setInterval(() => {
            getMembers().then((data) => {
                setHomeState((prevState) => ({ ...prevState, members: [...data] }));
            })
            console.log("Intervalo ejecutado")
        }, MINUTE_MS);
        return () => clearInterval(interval);
    }, [members])

    return <>
        <Header />
        <div className="px-4 md:px-16 py-8">
            <div className="min-h-[75vh] grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="py-8">
                    <MembersForm setHomeState={setHomeState} members={members} />
                </div>
                <div className="py-8">
                    <MembersTable members={members} />
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Home