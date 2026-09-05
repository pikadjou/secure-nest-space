import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrustParadoxSection from "@/components/TrustParadoxSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

const renderSection = () =>
  render(
    <MemoryRouter>
      <LanguageProvider>
        <TrustParadoxSection />
      </LanguageProvider>
    </MemoryRouter>,
  );

describe("TrustParadoxSection", () => {
  it("affiche les trois accroches du constat", () => {
    renderSection();

    expect(screen.getByText("On lit les avis.")).toBeInTheDocument();
    expect(screen.getByText("On regarde les notes.")).toBeInTheDocument();
    expect(screen.getByText("On vérifie les étoiles.")).toBeInTheDocument();
  });

  it("affiche la bascule et la punchline", () => {
    renderSection();

    expect(
      screen.getByText("Confier ses clés à un inconnu pendant 3 ans ?"),
    ).toBeInTheDocument();
    expect(screen.getByText("Rien.")).toBeInTheDocument();
    expect(screen.getByText("Est-ce normal ? Évidemment que non.")).toBeInTheDocument();
    expect(screen.getByText(/Un bon locataire mérite d'être choisi\./)).toBeInTheDocument();
    expect(screen.getByText("Un bon propriétaire aussi.")).toBeInTheDocument();
  });
});
