function Footer() {
  return (
    <section className="pt-6 mt-8 border-gray-100 border-t-2">
      <div className="mt-8 space-y-6 md:flex justify-between p-2">
        <div className="md:p-6 p-2">
          <ul className="md:space-y-3 space-y-2 text-gray-500">
            <h1 className="font-bold text-2xl text-gray-600">Quick links</h1>
            <li>Home</li>
            <li>About</li> <li>privacy policies</li>{" "}
            <li>terms and condtions</li> <li>Support</li>
          </ul>
        </div>
        <div>
          <div className="md:p-6 p-2">
            <ul className="md:space-y-3 space-y-2 text-gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Contact weblog developers
              </h1>
              <li>instagram</li>
              <li>Linkedin</li> <li> Github</li> <li>Reddit</li>
            </ul>
          </div>
        </div>
        <p className="text-white">Subscribe</p>
        <div className="p-2 bg-blue-600 text-white rounded-sm shadow-sm">
          <input
            className="md:flex p-2 md:p-3 justify-between rounded-full shadeow-xs "
            type="text"
          />
          <button className="bg-white text-blue-600 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
