import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContac extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacs';
  info: {
    displayName: 'contac';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Whatsapp: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {};
}

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    displayName: 'benefit_item';
    icon: 'alien';
  };
  attributes: {};
}

export interface SocialLinkSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_link_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contac': ContactContac;
      'sections.contact': SectionsContact;
      'seo.seo': SeoSeo;
      'shared.benefit-item': SharedBenefitItem;
      'social-link.social-links': SocialLinkSocialLinks;
    }
  }
}
