import { Bounce, ToastContainer } from 'react-toastify';
import { MessagesContainerProps } from './MessagesContainerProps.tsx';

export function MessagesContainer({ children }: MessagesContainerProps) {
  return (
    <>
      {children}

      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
