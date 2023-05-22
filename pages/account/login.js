import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { userService, alertService } from 'services';


export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <>
            <div className="login mx-auto">
                <div className="row">
                    <div className="col-xxl-6 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="container mx-auto">
                                <div className="pb-50">
                                    <Link className="navbar-brand" href="/#">
                                        <img src="/icon/logoo.png" width={100} height={100}/>
                                    </Link>
                                </div>
                                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
                                <p className="text-lg color-palette-1 m-0">Sudah Punya akun? Ayo Segera Masuk</p>

                                <div className="pt-50">
                                    <label id="username" className="form-label text-lg fw-medium color-palette-1 mb-10">Username</label>
                                    <input name="username" type="password" {...register('username')} className={`form-control rounded-pill text-lg ${errors.username ? 'is-invalid' : ''}`} aria-describedby="username" placeholder="Enter your username"/>
                                    <div className="invalid-feedback">{errors.username?.message}</div>
                                </div>
                                <div className="pt-20">
                                    <label id="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                                    <input name="password" type="password" {...register('password')} className={`form-control rounded-pill text-lg ${errors.password ? 'is-invalid' : ''}`} aria-describedby="password" placeholder="Your password"/>
                                    <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>
                                <div className="button-group d-flex flex-column mx-auto pt-30 pb-30">
                                    <button disabled={formState.isSubmitting} className="btn btn-login fw-medium text-lg rounded-pill mb-10" role="button">
                                        
                                        LogIn
                                    </button>
                                        
                                    <Link className="btn btn-register fw-medium text-lg text-white color-palette-1 rounded-pill"
                                        href="/account/register" role="button">
                                            Register
                                    </Link>
                                </div>
                            </div>
                            
                        </form>
                        
                        
                    </div>
                    <div className="poster col-xxl-6 col-lg-6 text-center pt-lg-145 pb-lg-150 d-lg-block d-none">
                        <img src="/img/Header-9.png" width="502" height="391.21" className="img-fluid pb-50" alt=""/>
                        <h2 className="text-4xl fw-bold mb-30">Win the battle.<br/>
                            Be the Champion.</h2>
                        <p className=" m-0">Kami menyediakan jutaan cara untuk<br/> membantu players menjadi<br/>
                            pemenang sejati</p>
                    </div>
                </div>
            </div> 
        </>
    );
}