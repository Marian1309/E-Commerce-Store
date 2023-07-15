const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} FakeStoreName, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
