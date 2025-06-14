import Link from "next/link";
function Nav(){
    return(<>
      <nav className="space-x-2">
        <Link href="/contact" className="hover:underline text-sm font-medium">Contact</Link>
        <Link href="/about" className="hover:underline text-sm font-medium">About</Link>
        
      </nav>
    
    </>)
}
export default Nav;