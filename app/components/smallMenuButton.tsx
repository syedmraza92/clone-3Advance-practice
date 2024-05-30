import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SmallMenuButton() {
    return (
      <div className='lg:hidden'>
        <button className="bg-3advance rounded-full p-2 flex items-center ">
          <MoreHorizIcon style={{color: 'white'}}/>
        </button>
      </div>
    );
  }
  
  export default SmallMenuButton;
  