import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };

    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    return (
      <div className='container-max py-14 flex flex-col md:flex-row gap-2 md:gap-4 text-center min-h-[80vh]'>
        <img
          src='https://i.pinimg.com/originals/39/d7/4b/39d74b3aff552c18810fe8a2f0b05b1f.png'
          alt=''
          className='w-full max-w-[450px] mx-auto rounded-lg'
        />

        <div className='w-[80%] max-w-[480px] mx-auto my-auto'>
          <h1 className='text-3xl font-semibold my-4'>Delishio </h1>

          <p className='text-start mb-2'>
          Every day, we wake up inspired to deliver convenience that surpasses your expectations. Delishio is more than just a brand; it's a promise of unparalleled ease and comfort in your life.          </p>
          <p className='text-start'>
            This project was built during the learning of{' '}
            <a
              className='text-red-500'
              href='https://namastedev.com/namaste-react/'
            >
              Namaste React
            </a>{' '}
            taught by{' '}
            <a
              className='text-red-500'
              href='https://www.linkedin.com/in/akshaymarch7/'
            >
              Akshay Saini
            </a>
          </p>
          <p className='text-start text-xl mt-4'>
            Get In <span className='font-semibold'>Touch</span>
          </p>
          <p className='text-start mt-2'> <span className='font-semibold'>Behive workspace,</span> Plot No. 77, Jbr Tech Park, 6th Rd, Whitefield, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066</p>
        </div>
      </div>
    );
  }
}

export default About;
