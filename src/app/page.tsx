/*
 * Copyright (c) Mihir Paldhikar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { TechLogos } from "@components/TechLogos";
import { Source_Code_Pro } from "next/font/google";
import { IconButton } from "@components/IconButton";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"grid md:grid-cols-2 min-h-screen w-full grid-cols-1 "}>
      <div
        className={
          "flex flex-col justify-center pl-5 pr-5 md:pr-0 md:mt-0 mt-[-50px] md:pl-32 md:order-first order-last"
        }
      >
        <span className={"text-xl font-medium mb-2 text-neutral-700"}>
          I am
        </span>
        <h1 className={"text-6xl font-black text-neutral-700"}>
          <span className={"text-blue-600"}>Mihir</span> Paldhikar
        </h1>
        <span
          className={`${sourceCodePro.className} text-blue-800 font-medium text-lg mt-3`}
        >
          Drive To Develop
        </span>

        <h5
          className={`${sourceCodePro.className}  font-medium text-lg mt-5 text-neutral-700`}
        >
          Creating Scalable solutions with{" "}
          <span className={"text-blue-800"}>Technology.</span>
        </h5>
        <div className={"md:w-[200px] w-full space-y-3 pt-10"}>
          <div className={"flex space-x-5 w-full pb-3 justify-evenly"}>
            <IconButton
              link={"https://github.com/mihirpaldhikar"}
              icon={<FaGithub size={35} />}
            />
            <IconButton
              link={"https://www.linkedin.com/in/mihirpaldhikar/"}
              icon={<FaLinkedin size={35} />}
            />
            <IconButton
              link={"https://twitter.com/mihirpaldhikar"}
              icon={<FaXTwitter size={35} />}
            />
          </div>
        </div>
      </div>
      <div className={"flex flex-col justify-center items-center"}>
        <TechLogos />
      </div>
    </div>
  );
}
