import React from "react"
import { Header } from "../components/shared/header"
import { Footer } from "../components/shared/footer"

const OtherPage = () => {

    return <>
        <Header />
        <div className="px-4 md:px-16 py-8">
            <div className="min-h-[75vh]">
                Another Page
            </div>
        </div>
        <Footer />
    </>
}

export default OtherPage