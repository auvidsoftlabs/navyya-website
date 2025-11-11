import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface RequestAccessFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormValues {
  name: string;
  email: string;
  contactNumber: string;
  remarks: string;
}

export function RequestAccessForm({
  open,
  onOpenChange,
}: RequestAccessFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      remarks: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const payload = {
        access_key: "fa27eeab-0f11-4e72-8670-1ba95f13d1b7",
        name: data.name,
        email: data.email,
        subject: "Navyya Website – Request Access",
        contact_number: data.contactNumber || "Not provided",
        message: data.remarks || "No additional remarks provided.",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Submission failed. Please try again."
        );
      }

      form.reset();
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!open) {
      setIsSuccess(false);
      setIsSubmitting(false);
      form.reset();
    }
  }, [open, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[92vw] max-w-[420px] p-0 sm:w-[420px]">
        <div className="p-6 pt-7 space-y-6 min-h-[280px]">
          {isSuccess ? (
            <div className="space-y-6 text-center">
              <DialogHeader className="space-y-3 text-center">
                <DialogTitle className="text-2xl leading-tight text-primary">
                  Request Received
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                  Thank you! Our team will review your request and reach out to
                  you shortly.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSuccess(false);
                    onOpenChange(false);
                  }}
                  className="rounded-full px-6"
                >
                  Close
                </Button>
                <Button
                  className="rounded-full bg-accent hover:bg-accent/90 px-6"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader className="space-y-3 text-left pr-16">
                <DialogTitle className="text-2xl leading-tight">
                  Request Access
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{
                      required: "Name is required",
                    }}
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>
                          Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            autoComplete="name"
                            {...field}
                            className="h-[52px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            autoComplete="email"
                            {...field}
                            className="h-[52px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your contact number (optional)"
                            autoComplete="tel"
                            {...field}
                            className="h-[52px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="remarks"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Remarks</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any additional information you'd like to share (optional)"
                            rows={4}
                            {...field}
                            className="resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3 pt-1.5">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => onOpenChange(false)}
                      className="flex-1 rounded-full"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 rounded-full bg-accent hover:bg-accent/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </div>
                </form>
              </Form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
