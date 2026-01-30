

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-500">
      <p>Copyright ⓒ {year} Beemnet Tilahun All Right Reserved.</p>
    </footer>
  );
}

