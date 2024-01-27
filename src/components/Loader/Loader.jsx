import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 200,
        left: '50%',
      }}
    >
    <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="Loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
    </div>
  );
};