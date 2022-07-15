import Header from "../Header"

export const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default DefaultLayout