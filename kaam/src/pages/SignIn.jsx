import { useAuth } from "../contexts/auth-context";

function SignIn() {
    const { login } = useAuth()
    return <button onClick={login}>Sign in with Google</button>
}

export default SignIn;