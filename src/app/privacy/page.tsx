import { Header, Footer } from "@/components/shell";
import { Container } from "@/components/ui";

export default function Privacy() {
    return (
        <>

            <main>
                <Container>
                    <section className="py-16">
                        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
                        <p className="mt-4 text-sm text-zinc-600">
                            We collect only the minimum data needed to operate this website.
                            If you contact us, we use your email only to reply.
                        </p>
                    </section>
                </Container>
            </main>

        </>
    );
}
