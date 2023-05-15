import Button from './standard/Button';

const Launch = () => {
  return (
    <div className="Launch">
      <h1>Board Title</h1>

      <Button
        onClick={() => {
          console.log('clicked');
        }}>
        &nbsp; + Add New task &nbsp;
      </Button>
    </div>
  );
};

export default Launch;
