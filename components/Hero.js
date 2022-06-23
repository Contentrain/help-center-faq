export default function Hero(params) {
  return (
    <div {...params}>
      <div className=" max-w-lg">
        <h3 className="text-red-500 font-semibold text-md mb-4">
          Frequently asked questions
        </h3>
        <h1 className="text-4xl font-semibold mb-4">
          Hi! How we can help you?
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor dapibus neque. * Nunc dignissim risus id metus. * Cras ornare
          tristique elit. * Vivamus vestibulum ntulla nec ante. * Praesent
          placerat risus quis eros. * Fusce pellentesque suscipit nibh.
        </p>
      </div>
    </div>
  );
}
