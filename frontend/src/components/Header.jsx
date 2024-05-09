import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '/src/Logo.jpg'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='bg-sky-700 text-white'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
          <div className="flex items-center"> {/* New div for logo and title */}
            <img src= '/src/Logo.jpg' className='h-10 w-10 mr-2' /> {/* Adjust height and width according to your design */}
            <h1 className='font-bold'>I CARE</h1>
          </div>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
