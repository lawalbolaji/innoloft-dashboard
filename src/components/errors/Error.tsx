import errorFace from "../../assets/error-face.png";

export function ErrorComponent(props: { is404: boolean }) {
    return (
        <div className="w-full h-full">
            <div className="h-full bg-white text-center py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-4">
                {props.is404 ? (
                    <h1 className="block text-8xl font-bold text-gray-600">404</h1>
                ) : (
                    <>
                        <img className="m-auto" src={errorFace} alt="error-face" />
                    </>
                )}
                <h1 className="mt-8 block text-2xl font-bold text-white">
                    {props.is404 ? (
                        <p className="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
                    ) : (
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
                    )}
                </h1>
            </div>
        </div>
    );
}
