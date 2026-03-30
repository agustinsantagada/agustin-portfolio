export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:agustinsantagada@gmail.com" className="footer-email">
        agustinsantagada@gmail.com
      </a>
      <span className="footer-copy">© {new Date().getFullYear()}</span>
    </footer>
  )
}
