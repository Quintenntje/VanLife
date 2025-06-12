import Input from "../components/Input";


export default function AuthForm({ title, onSubmit, buttonText, inputFields }) {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={onSubmit}>
        {inputFields.map((field) => (
          <Input
            key={field.id}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <button
          type="submit"
          className="cursor-pointer w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
