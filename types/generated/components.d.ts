import type { Schema, Struct } from '@strapi/strapi';

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
      'seo.seo': SeoSeo;
      'shared.benefit-item': SharedBenefitItem;
      'social-link.social-links': SocialLinkSocialLinks;
    }
  }
}
