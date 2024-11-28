const Home = ({ role }) => {
    return (
      <div>
        <h1>Welcome to the {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
        <p>This is your customized dashboard.</p>
      </div>
    );
  };
  
  export default Home;