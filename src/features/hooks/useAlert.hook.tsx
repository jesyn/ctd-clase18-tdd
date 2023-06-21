// Podemos cambiar la implementacion a nuestra propia libreria de alerts, gracias al principio solid de inversion de dependencia
const useAlert = () => {
  const dispatchSuccessAlert = (message: string) => {
    alert("SUCCESS: " + message);
  };

  const dispatchErrorAlert = (message: string) => {
    alert("ERROR: " + message);
  };

  return {
    dispatchSuccessAlert,
    dispatchErrorAlert,
  };
};

export default useAlert;
