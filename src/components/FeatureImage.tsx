export default function FeatureImage() {
    return(
        <div className="flex flex-col m-10 items-justify text-center">
            <h1 className="md:text-3xl font-bold pb-6">Could This be your Certain Something?</h1>
            <img className="ml-auto mr-auto md:max-w-[620px] pb-6" src="/images/feature-image.webp" alt="An image showing pictures of work that could be your certains something" height="500" width="700" />
        </div>
    );
}