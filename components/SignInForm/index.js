import Link from "next/link";

export default function SignInForm(){
    return (
        <>
            <div className="pt-50">
                <label id="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email
                    Address</label>
                <input type="email" className="form-control rounded-pill text-lg" id="email" name="email"
                    aria-describedby="email" placeholder="Enter your email address"/>
            </div>
            <div className="pt-30">
                <label id="password"
                    className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                <input type="password" className="form-control rounded-pill text-lg" id="password"
                    name="password" aria-describedby="password" placeholder="Your password"/>
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <Link className="btn btn-sign-in fw-medium text-lg rounded-pill mb-16"
                    href="/#" role="button">
                        Sign In
                </Link>
                <Link className="btn btn-sign-up fw-medium text-lg text-white color-palette-1 rounded-pill"
                    href="sign-up" role="button">
                        Sign Up
                </Link>
            </div>
        </>
    );
}


