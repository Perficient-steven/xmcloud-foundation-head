import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocPromoProps {
  imageUrl: string;
  text: string;
  url: string;
  urlText: string;
}

export const ByocPromo = (props: ByocPromoProps): JSX.Element => {
  return (
    <div className="component promo col-12 link-button">
      <div className="component-content">
        <div className="field-promoicon">
          {props.imageUrl && <img alt="Kayee" width="2000" height="1116" src={props.imageUrl} />}
        </div>
        <div className="promo-text">
          <div>
            <div className="field-promotext">
              <div>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
          {props.url && (
            <div className="field-promolink">
              <a href={props.url} title={props.urlText} target="_blank">
                {props.urlText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocPromo, {
  name: 'ByocPromo',
  title: 'BYOC Promo',
  description: 'BYOC Promo',
  thumbnail:
    'https://e7.pngegg.com/pngimages/441/672/png-clipart-sunlight-graphic-design-promo-miscellaneous-template-thumbnail.png',
  group: 'BYOC Components',
  required: ['text', 'imageUrl', 'url'],
  properties: {
    imageUrl: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
    urlText: {
      type: 'string',
    },
  },
  ui: {
    text: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Promo text goes here',
    },
  },
});
