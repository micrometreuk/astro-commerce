export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          All rights reserved. Copyright
          © <script>
            document.write(new Date().getFullYear()) 
          </script>
          
          <a href="/" className="text-secondary ms-1">croydonwebservices.com</a>.
        </div>
      </footer>
    </>
  );
}


