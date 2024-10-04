"use client"

import { FormEvent } from "react";
import { PostData } from "@/library/ContactFunctions";

export default function Contact() {
    async function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        var response = PostData({data: formData});

        console.log(response);
    }

    return (
        <div className="flex flex-col md:flex-row justify-center">
            <div className="p-10 md:w-1/4">
                <h1 className="text-lg md:text-3xl font-bold pb-6">Contact</h1>
                <p className="">Let’s make Your Certain Something a reality.</p>
            </div>
            <form className="p-10 md:w-2/4 md:max-w-[600px]" onSubmit={submitForm}>
                <div className="">
                    <div className="flex flex-col pb-10">
                        <label className="text-lg font-bold" htmlFor="name">Name<span className="text-sm text-gray-400"> (required)</span></label>
                        <input className="border-2 border-gray-200 h-12 p-2" id="name" type="text" name="name" placeholder="" />
                    </div>

                    <div className="flex flex-col pb-10">
                        <label className="text-lg font-bold" htmlFor="email">Email<span className="text-sm text-gray-400"> (required)</span></label>
                        <input className="border-2 border-gray-200 h-12 p-2" id="email" type="email" name="email" placeholder="" />
                    </div>

                    <div className="flex flex-col pb-10">
                        <label className="text-lg font-bold" htmlFor="message">Message</label>
                        <textarea className="border-2 border-gray-200 h-36 p-2" id="messages" name="message" placeholder="" />
                    </div>

                    <button className="bg-black text-white w-full h-12" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}