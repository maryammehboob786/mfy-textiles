import Link from "next/link";
import { Container } from "@/components/Section";
export default function NotFound() {
  return <Container className="py-32 text-center"><p className="eyebrow plain justify-center">404</p><h1 className="display text-5xl mt-4">That page is not in the catalogue.</h1><Link href="/" className="btn btn-primary mt-10">Back to the front page</Link></Container>;
}
