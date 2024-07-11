import { pgTable, serial, text, varchar,boolean } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aioutput', {
    id:            serial('id').primaryKey(),
    formData:      varchar('formData').notNull(),
    aiResponse:    text('aiResponse'),
    templateSlug:  varchar('templateSlug').notNull(),
    createdBy:     varchar('createdBy').notNull(),
    createdAt:     varchar('createdAt').notNull(),
  });
  
  export const UserSubscription = pgTable('userSubscription', {
    id:         serial('id').primaryKey(),
    email:      varchar('email').notNull(),
    userName:   varchar('userName').notNull(),
    planID:     varchar('planID').notNull(),
    paymentID:  varchar('paymentId').notNull(),
    joinDate:     varchar('joinDate').notNull(),
    active: boolean('active')
    
  });
  