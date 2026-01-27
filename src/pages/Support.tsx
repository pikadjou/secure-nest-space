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
import { useLanguage } from "@/contexts/LanguageContext";

interface Attachment {
  id: string;
  file: File;
  name: string;
  size: string;
}

const Support = () => {
  const { t } = useLanguage();
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const { toast } = useToast();

  const ticketSchema = z.object({
    nom: z.string().trim().min(2, t("support.validation.lastName")).max(50, t("support.validation.lastNameMax")),
    prenom: z.string().trim().min(2, t("support.validation.firstName")).max(50, t("support.validation.firstNameMax")),
    idBailo: z.string().trim().min(5, t("support.validation.bailoId")).max(20, t("support.validation.bailoIdMax")),
    message: z.string().trim().min(20, t("support.validation.message")).max(2000, t("support.validation.messageMax")),
  });

  type TicketFormData = z.infer<typeof ticketSchema>;

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
          title: t("support.error.fileTooLarge"),
          description: `${file.name} ${t("support.error.fileTooLargeDesc")}`,
          variant: "destructive",
        });
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: t("support.error.unsupportedType"),
          description: `${file.name} ${t("support.error.unsupportedTypeDesc")}`,
          variant: "destructive",
        });
        return;
      }

      if (attachments.length >= 5) {
        toast({
          title: t("support.error.maxFiles"),
          description: t("support.error.maxFilesDesc"),
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
                  {t("support.success.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("support.success.message")}
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mb-8">
                  <p className="text-sm text-muted-foreground mb-1">{t("support.success.ticketNumber")}</p>
                  <p className="text-xl font-mono font-bold text-primary">{ticketNumber}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleNewTicket} variant="outline">
                    <Ticket className="w-4 h-4 mr-2" />
                    {t("support.success.newTicket")}
                  </Button>
                  <Button asChild>
                    <Link to="/">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {t("support.success.backHome")}
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
              {t("support.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("support.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {t("support.subtitle")}
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>{t("support.form.title")}</CardTitle>
              <CardDescription>
                {t("support.form.subtitle")}
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
                          <FormLabel>{t("support.form.lastName")} *</FormLabel>
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
                          <FormLabel>{t("support.form.firstName")} *</FormLabel>
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
                        <FormLabel>{t("support.form.bailoId")} *</FormLabel>
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
                        <FormLabel>{t("support.form.message")} *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("support.form.messagePlaceholder")}
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
                    <Label>{t("support.form.attachments")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("support.form.attachmentsHelp")}
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
                          <span className="text-sm text-muted-foreground">{t("support.form.addFiles")}</span>
                        </div>
                      </label>
                      <span className="text-sm text-muted-foreground">
                        {attachments.length}/5 {t("support.form.filesCount")}
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
                      {t("support.form.submit")}
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
