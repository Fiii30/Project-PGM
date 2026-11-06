export default function WorkForm() {
  return (
    <section className="px-5 py-16 md:px-10">
      <h2 className="mb-8 text-3xl font-extrabold uppercase">Tambah Karya</h2>

      <form className="grid max-w-2xl gap-6">
        <input
          placeholder="Judul karya"
          className="border-b border-black bg-transparent py-3 outline-none"
        />

        <input
          placeholder="Lokasi"
          className="border-b border-black bg-transparent py-3 outline-none"
        />

        <textarea
          placeholder="Deskripsi"
          rows={4}
          className="border-b border-black bg-transparent py-3 outline-none"
        />

        <button
          type="button"
          className="w-fit bg-black px-8 py-4 text-xs uppercase tracking-widest text-[#f4f2ee]"
        >
          Simpan
        </button>
      </form>
    </section>
  );
}
