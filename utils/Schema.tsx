import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aioutput', {
    id:            serial('id').primaryKey(),
    formData:      varchar('formData').notNull(),
    aiResponse:    text('aiResponse'),
    templateSlug:  varchar('templateSlug').notNull(),
    createdBy:     varchar('createdBy').notNull(),
    createdAt:     varchar('createdAt').notNull(),
  });
  