import loading from '../assets/loading.gif';

const Loading = () => {
    return (
        <div className='w-full h-dvh flex flex-col justify-center items-center'>
            <img src={loading} alt="Loading" className="loading w-56" id="loading" />
        </div>

    )

}

export default Loading
