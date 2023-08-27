import { Link } from 'react-router-dom';
import payment from '../../../assets/images/payment.png';

const addresses = [
  {
    id: 1,
    name: 'Collins Street West Victoria 8007 Australia',
    logo: <i className="fa-solid fa-location-dot text-lime-600 pt-4 pl-5"></i>,
  },
  {
    id: 2,
    name: '+61 3 123456',
    logo: <i className="fa-solid fa-phone text-lime-600 pt-4 pl-5"></i>,
  },
  {
    id: 3,
    name: 'example123@gmail.com',
    logo: <i className="fa-regular fa-envelope text-lime-600 pt-4 pl-5"></i>,
  },
];

const socialMedias = [
  {
    id: 1,
    logo: <i className="fa-brands fa-facebook px-2 py-2 bg-blue-900"></i>,
  },
  {
    id: 2,
    logo: <i className="fa-brands fa-twitter px-2 py-2 bg-sky-500"></i>,
  },
  {
    id: 3,
    logo: (
      <i className="fa-brands fa-instagram px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></i>
    ),
  },
  {
    id: 4,
    logo: <i className="fa-brands fa-linkedin px-2 py-2 bg-sky-600"></i>,
  },
];

const informations = [
  {
    id: 1,
    title: 'About Us',
  },
  {
    id: 2,
    title: 'Contact Us',
  },
  {
    id: 3,
    title: 'Privacy',
  },
  {
    id: 4,
    title: 'Frequently Questions',
  },
  {
    id: 5,
    title: 'Frequently Questions',
  },
  {
    id: 6,
    title: 'Customer Services',
  },
];
export default function Footer() {
  return (
    <div>
      <div className="addrss grid grid-cols-4 gap-4 bg-black text-white">
        <div className="pr-8 pl-8 pt-8">
          <h3 className="font-bold">Our Address</h3>

          <div className="mt-8">
            {addresses.map(item => (
              <div
                key={item.id}
                className="flex justify-start items-center my-1"
              >
                {item.logo}
                <h3 className="text-slate-500 pl-5">{item.name}</h3>
              </div>
            ))}
          </div>

          <Link to="/" className="mt-4">
            {socialMedias.map(item => (
              <span className="mt-4" key={item.id}>
                {item.logo}
              </span>
            ))}
          </Link>
        </div>
        <div className="pr-8 pl-8 pt-8">
          <h3 className="font-bold pb-6">Information</h3>

          <div className="my-1">
            {informations.map(item => (
              <Link to="" key={item.id} className="text-slate-500" href="">
                <h5>{item.title}</h5>
              </Link>
            ))}
          </div>
        </div>
        <div className="pr-8 pl-8 pt-8">
          <h3 className="font-bold pb-6">My Account</h3>
          <a className="text-slate-500" href="">
            My Acoount
          </a>
          <br />
          <a className="text-slate-500" href="">
            Login Page
          </a>
          <br />
          <a className="text-slate-500" href="">
            Privacy
          </a>
          <br />
          <a className="text-slate-500" href="">
            Shopping Card
          </a>
          <br />
          <a className="text-slate-500" href="">
            Register Account
          </a>
          <br />
          <a className="text-slate-500" href="">
            Logout
          </a>
        </div>
        <div className="pr-8 pl-8 pt-8">
          <h3 className="font-bold pb-6">Need Help?</h3>
          <a className="text-slate-500" href="">
            Help Center
          </a>
          <br />
          <a className="text-slate-500" href="">
            Author Terms
          </a>
          <br />
          <a className="text-slate-500" href="">
            Fodo Market Terms
          </a>
          <br />
          <a className="text-slate-500" href="">
            Shopping Cart
          </a>
          <br />
          <a className="text-slate-500" href="">
            Fodo Licenses
          </a>
          <br />
          <a className="text-slate-500" href="">
            Contact Us
          </a>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="pl-8 pr-8 pt-8">
          <h3>
            Food & Vegetables:{' '}
            <a className="text-slate-500" href="">
              {' '}
              Carrot |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Cauliflower |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Chives |
            </a>
            <a className="text-slate-500" href="">
              {' '}
              Potato |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Cauliflower |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Chives |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Potato |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Cauliflower{' '}
            </a>
          </h3>
        </div>
        <div className="pl-8 pt-4">
          <h3>
            Health & Beauty:{' '}
            <a className="text-slate-500" href="">
              {' '}
              Skin Care |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Make Up |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Hair Care |
            </a>
            <a className="text-slate-500" href="">
              {' '}
              Lipstick |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Perfume |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Hair Care |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Lipstic |
            </a>{' '}
            <a className="text-slate-500" href="">
              {' '}
              Perfume{' '}
            </a>
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-40 bg-black text-white p-8">
        <div>
          <img src={payment} alt="" />
        </div>
        <div>
          <h3 className="text-slate-500">
            Copyright ©{' '}
            <a className="text-blue-800" href="">
              {' '}
              E-COMMERCE |{' '}
            </a>{' '}
            All rights Reserved.
          </h3>
        </div>
      </div>
    </div>
  );
}
