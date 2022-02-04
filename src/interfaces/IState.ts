interface IState {
  bucket: [];
  sorts: {
    price: string;
    title: string;
  };
  filters: {
    price: string;
    title: string;
  };
}
export default IState;
