export function CardCustomer() {
  return (
    <article className="flex flex-col border p-2 rounded-xl gap-2 hover:scale-105 duration-300 mt-2">
      <h2>
        <a className="text-gray-200 font-bold">Nome:</a> Mercado silva
      </h2>
      <p>
        <a className="text-gray-200 font-bold">Email:</a> teste@gmail.com
      </p>
      <p>
        <a className="text-gray-200 font-bold">Telefone:</a> 99999999
      </p>
      <button className="bg-red-700 font-bold  px-1 rounded self-start">
        Deletar
      </button>
    </article>
  );
}
