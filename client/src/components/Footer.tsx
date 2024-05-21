const Footer = () => {
  return (
    <footer className="bg-yellow-1 border border-t border-r-0 border-green-800 text-green-1 py-8 ">
      <div className=" mx-auto px-4 max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="footer-links">
            <h3 className="  text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="  ">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Foodelivery Cares</li>
              <li>Gift a Smile</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="  text-lg font-semibold mb-4">Connect with Us</h3>
            <ul className="  ">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="  text-lg font-semibold mb-4">Make Money with Us</h3>
            <ul className="  ">
              <li>Sell on Foodelivery</li>
              <li>Sell under Foodelivery Accelerator</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Foodelivery</li>
              <li>Advertise Your Products</li>
              <li>Foodelivery Pay on Merchants</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-8">
          <p className="  ">&copy; {new Date().getFullYear()} Foodelivery.com. All rights reserved.</p>
        </div>
    </div>
    </footer>
  );
};

export default Footer;