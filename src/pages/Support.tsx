import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Paperclip, X, CheckCircle, Ticket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const ticketSchema = z.object({
  nom: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(50, "Le nom ne peut pas dépasser 50 caractères"),
  prenom: z.string().trim().min(2, "Le prénom doit contenir au moins 2 caractères").max(50, "Le prénom ne peut pas dépasser 50 caractères"),
  idBailo: z.string().trim().min(5, "L'ID Bailo doit contenir au moins 5 caractères").max(20, "L'ID Bailo ne peut pas dépasser 20 caractères"),
  message: z.string().trim().min(20, "Le message doit contenir au moins 20 caractères").max(2000, "Le message ne peut pas dépasser 2000 caractères"),
});

type TicketFormData = z.infer<typeof ticketSchema>;

interface Attachment {
  id: string;
  file: File;
  name: string;
  size: string;
}

const Support = () => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const { toast } = useToast();

  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      idBailo: "",
      message: "",
    },
  });

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    Array.from(files).forEach((file) => {
      if (file.size > maxFileSize) {
        toast({
          title: "Fichier trop volumineux",
          description: `${file.name} dépasse la limite de 10MB`,
          variant: "destructive",
        });
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Type de fichier non supporté",
          description: `${file.name} n'est pas un format accepté (JPG, PNG, GIF, PDF, DOC)`,
          variant: "destructive",
        });
        return;
      }

      if (attachments.length >= 5) {
        toast({
          title: "Limite atteinte",
          description: "Vous ne pouvez pas ajouter plus de 5 pièces jointes",
          variant: "destructive",
        });
        return;
      }

      const newAttachment: Attachment = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        name: file.name,
        size: formatFileSize(file.size),
      };

      setAttachments((prev) => [...prev, newAttachment]);
    });

    e.target.value = "";
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id));
  };

  const generateTicketNumber = (): string => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `BLO-${timestamp}-${random}`;
  };

  const onSubmit = (data: TicketFormData) => {
    const generatedTicketNumber = generateTicketNumber();
    setTicketNumber(generatedTicketNumber);
    
    console.log("Ticket soumis:", {
      ...data,
      attachments: attachments.map((a) => ({ name: a.name, size: a.size })),
      ticketNumber: generatedTicketNumber,
    });

    setIsSubmitted(true);
  };

  const handleNewTicket = () => {
    form.reset();
    setAttachments([]);
    setIsSubmitted(false);
    setTicketNumber("");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="border-secondary/30 shadow-card">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Ticket envoyé avec succès !
                </h2>
                <p className="text-muted-foreground mb-6">
                  Votre demande a été enregistrée. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mb-8">
                  <p className="text-sm text-muted-foreground mb-1">Numéro de ticket</p>
                  <p className="text-xl font-mono font-bold text-primary">{ticketNumber}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleNewTicket} variant="outline">
                    <Ticket className="w-4 h-4 mr-2" />
                    Créer un autre ticket
                  </Button>
                  <Button asChild>
                    <Link to="/">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour à l'accueil
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Ticket className="w-4 h-4" />
              Support Client
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Créer un ticket de support
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Décrivez votre problème ou votre question et notre équipe vous répondra rapidement.
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Nouveau ticket</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous. Les champs marqués d'un * sont obligatoires.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nom & Prénom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Dupont" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="prenom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* ID Bailo */}
                  <FormField
                    control={form.control}
                    name="idBailo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID Bailo *</FormLabel>
                        <FormControl>
                          <Input placeholder="BLO-12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez votre problème ou votre question en détail..."
                            className="min-h-[150px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Attachments */}
                  <div className="space-y-3">
                    <Label>Pièces jointes (optionnel)</Label>
                    <p className="text-sm text-muted-foreground">
                      Formats acceptés: JPG, PNG, GIF, PDF, DOC. Maximum 10MB par fichier, 5 fichiers maximum.
                    </p>
                    
                    {/* Upload Button */}
                    <div className="flex items-center gap-4">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors">
                          <Paperclip className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Ajouter des fichiers</span>
                        </div>
                      </label>
                      <span className="text-sm text-muted-foreground">
                        {attachments.length}/5 fichiers
                      </span>
                    </div>

                    {/* Attached Files List */}
                    {attachments.length > 0 && (
                      <div className="space-y-2 mt-3">
                        {attachments.map((attachment) => (
                          <div
                            key={attachment.id}
                            className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-2"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <Paperclip className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              <div className="min-w-0">
                                <p className="text-sm font-medium truncate">{attachment.name}</p>
                                <p className="text-xs text-muted-foreground">{attachment.size}</p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAttachment(attachment.id)}
                              className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full" variant="accent">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le ticket
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
