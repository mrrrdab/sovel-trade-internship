import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { useTheme, Avatar, Box, Typography, ImageList, ImageListItem, Rating } from '@mui/material';

import { BaseReviewsDTO } from '../../api';

export const Review: React.FC<BaseReviewsDTO> = ({ name, date, ratings, review, files }) => {
  const theme = useTheme();

  const { t } = useTranslation();

  const formattedDate = format(new Date(date), 'dd.MM.yyyy');

  const { serviceQuality, productQuality, deliveryQuality } = ratings;
  const averageRating = (serviceQuality + productQuality + deliveryQuality) / 3;

  return (
    <Box display="flex" border={`solid 1px ${theme.palette.grey[400]}`} borderRadius={theme.shape.borderRadius} p={4}>
      <Avatar sx={sx.avatar} />

      <Box flexGrow={1}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box>
            <Typography variant="subtitle1" fontSize={theme.typography.font.S} color={theme.palette.grey[400]}>
              {formattedDate}
            </Typography>
            <Typography variant="h6">{name}</Typography>
          </Box>

          <Rating value={averageRating} readOnly precision={0.5} />
        </Box>

        <Box width="60%" display="flex" justifyContent="space-between" mb={3}>
          <Box>
            {/* TODO */}
            <Typography variant="subtitle1">{t('forms.review.fields.serviceQuality')}</Typography>
            <Rating value={Number(serviceQuality)} readOnly />
          </Box>

          <Box>
            <Typography variant="subtitle1">{t('forms.review.fields.productQuality')}</Typography>
            <Rating value={Number(productQuality)} readOnly />
          </Box>

          <Box>
            <Typography variant="subtitle1">{t('forms.review.fields.deliveryQuality')}</Typography>
            <Rating value={Number(deliveryQuality)} readOnly />
          </Box>
        </Box>

        {review && (
          <Typography variant="body1" color={theme.palette.text.secondary}>
            {review}
          </Typography>
        )}

        {files && files.length > 0 && (
          <ImageList sx={sx.imageList} cols={files.length} gap={20}>
            {files.map(item => (
              <ImageListItem key={item.id} sx={sx.imageItem}>
                <img src={item.src} alt="" loading="lazy" style={{ maxWidth: '400px', maxHeight: '200px' }} />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </Box>
  );
};

const sx = {
  avatar: {
    width: '54px',
    height: '54px',
    mr: 4,
  },

  imageList: {
    display: 'flex',
    overflowX: 'auto',
    mt: 2,
    mb: 0,
  },

  imageItem: {
    flexShrink: 0,
  },
};
