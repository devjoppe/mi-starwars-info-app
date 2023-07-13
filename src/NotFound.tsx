import ErrorMessage from "./components/ErrorMessage.tsx";

const pageNotFound = "Page not found"
const NotFound = () => {
    return(
        <div>
            <ErrorMessage message={pageNotFound} />
        </div>
    )
}

export default NotFound