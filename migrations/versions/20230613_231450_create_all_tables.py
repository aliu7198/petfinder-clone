"""create all tables

Revision ID: 847577c78e6a
Revises:
Create Date: 2023-06-13 23:14:50.316507

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '847577c78e6a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('first_name', sa.String(length=30), nullable=True),
    sa.Column('last_name', sa.String(length=30), nullable=True),
    sa.Column('zip_code', sa.Integer(), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=True),
    sa.Column('country', sa.String(length=100), nullable=True),
    sa.Column('address', sa.String(length=255), nullable=True),
    sa.Column('city', sa.String(length=255), nullable=True),
    sa.Column('state', sa.String(length=255), nullable=True),
    sa.Column('adoption_agency', sa.Boolean(), nullable=False),
    sa.Column('org_name', sa.String(length=255), nullable=True),
    sa.Column('desired_pet', sa.String(), nullable=True),
    sa.Column('pet_owner', sa.String(), nullable=True),
    sa.Column('kids', sa.Boolean(), nullable=True),
    sa.Column('owner_type', sa.String(), nullable=True),
    sa.Column('current_pets', sa.String(), nullable=True),
    sa.Column('age_pref', sa.String(), nullable=True),
    sa.Column('gender_pref', sa.String(), nullable=True),
    sa.Column('size_pref', sa.String(), nullable=True),
    sa.Column('special_needs', sa.Boolean(), nullable=True),
    sa.Column('breed', sa.String(), nullable=True),
    sa.Column('coat_length_pref', sa.String(), nullable=True),
    sa.Column('private_outdoor', sa.String(), nullable=True),
    sa.Column('shared_outdoor', sa.String(), nullable=True),
    sa.Column('lease_restriction', sa.Boolean(), nullable=True),
    sa.Column('breed_restriction', sa.String(), nullable=True),
    sa.Column('size_restriction', sa.Integer(), nullable=True),
    sa.Column('activity_level_pref', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('animals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('age', sa.String(), nullable=False),
    sa.Column('gender', sa.String(), nullable=False),
    sa.Column('size', sa.String(), nullable=False),
    sa.Column('primary_breed', sa.String(), nullable=False),
    sa.Column('secondary_breed', sa.String(), nullable=True),
    sa.Column('color', sa.String(), nullable=True),
    sa.Column('characteristics', sa.String(), nullable=True),
    sa.Column('coat_length', sa.String(), nullable=True),
    sa.Column('house_trained', sa.Boolean(), nullable=True),
    sa.Column('vaccinated', sa.Boolean(), nullable=True),
    sa.Column('fixed', sa.Boolean(), nullable=True),
    sa.Column('special_needs', sa.Boolean(), nullable=True),
    sa.Column('good_with', sa.String(), nullable=True),
    sa.Column('description', sa.String(length=2000), nullable=True),
    sa.Column('adoption_fee', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('is_pet', sa.Boolean(), nullable=False),
    sa.Column('birth_date', sa.Date(), nullable=True),
    sa.Column('origin', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('saved_searches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('type', sa.String(), nullable=False),
    sa.Column('breed', sa.String(), nullable=True),
    sa.Column('age', sa.String(), nullable=True),
    sa.Column('size', sa.String(), nullable=True),
    sa.Column('gender', sa.String(), nullable=True),
    sa.Column('good_with', sa.String(), nullable=True),
    sa.Column('house_trained', sa.Boolean(), nullable=True),
    sa.Column('special_needs', sa.Boolean(), nullable=True),
    sa.Column('coat_length', sa.String(), nullable=True),
    sa.Column('color', sa.String(), nullable=True),
    sa.Column('days_on_site', sa.String(), nullable=True),
    sa.Column('org_name', sa.String(), nullable=True),
    sa.Column('pet_name', sa.String(), nullable=True),
    sa.Column('out_of_town', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('animal_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('animal_id', sa.Integer(), nullable=False),
    sa.Column('image_url', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['animal_id'], ['animals.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('animal_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['animal_id'], ['animals.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'animal_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.drop_table('animal_images')
    op.drop_table('saved_searches')
    op.drop_table('animals')
    op.drop_table('users')
    # ### end Alembic commands ###
